import sys
import os
import re
import mimetypes
import struct
from google import genai
from google.genai import types

def save_binary_file(file_name, data):
    # Create directory if it doesn't exist
    os.makedirs(os.path.dirname(file_name) if os.path.dirname(file_name) else '.', exist_ok=True)
    with open(file_name, "wb") as f:
        f.write(data)
    print(f"Success! Audio file saved to: {file_name}")

def convert_to_wav(audio_data: bytes, mime_type: str) -> bytes:
    parameters = parse_audio_mime_type(mime_type)
    bits_per_sample = parameters["bits_per_sample"]
    sample_rate = parameters["rate"]
    num_channels = 1
    data_size = len(audio_data)
    bytes_per_sample = bits_per_sample // 8
    block_align = num_channels * bytes_per_sample
    byte_rate = sample_rate * block_align
    chunk_size = 36 + data_size

    header = struct.pack(
        "<4sI4s4sIHHIIHH4sI",
        b"RIFF", chunk_size, b"WAVE", b"fmt ", 16, 1, num_channels,
        sample_rate, byte_rate, block_align, bits_per_sample,
        b"data", data_size
    )
    return header + audio_data

def parse_audio_mime_type(mime_type: str) -> dict:
    bits_per_sample = 16
    rate = 24000
    parts = mime_type.split(";")
    for param in parts:
        param = param.strip()
        if param.lower().startswith("rate="):
            try: rate = int(param.split("=", 1)[1])
            except: pass
        elif param.startswith("audio/L"):
            try: bits_per_sample = int(param.split("L", 1)[1])
            except: pass
    return {"bits_per_sample": bits_per_sample, "rate": rate}

def extract_slide_text(filename, slide_num):
    try:
        with open(filename, 'r') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: Could not find {filename}")
        sys.exit(1)
        
    pattern = rf"(^Slide {slide_num}:.*?)(?=^Slide \d+:|\Z)"
    match = re.search(pattern, content, re.MULTILINE | re.DOTALL)
    if match:
        full_text = match.group(1).strip()
        # Remove the first line (Slide X: Title)
        parts = full_text.split('\n', 1)
        if len(parts) > 1:
            return parts[1].strip()
        return ""
    return None

def generate(slide_num, model="gemini-2.5-flash-preview-tts", 
             spk1_name="Amanda", spk1_voice="Zephyr",
             spk2_name="Jack", spk2_voice="Puck",
             preamble="Read aloud in a warm, welcoming tone with Canadian accent:",
             voiceover_file="voiceover.txt",
             output_folder="audio"):
    text = extract_slide_text(voiceover_file, slide_num)
    if not text:
        print(f"Error: Slide {slide_num} not found in {voiceover_file}")
        sys.exit(1)
        
    print(f"Extracting audio for Slide {slide_num}...")
    print("-" * 40)
    print(text)
    print("-" * 40)
    
    # Map slide numbers directly to the audio output
    slide_int = int(slide_num)
    out_dir = output_folder.rstrip("/") if output_folder else "audio"
    out_file = f"{out_dir}/slide_{slide_int:02d}.wav"
    
    if "GEMINI_API_KEY" not in os.environ:
        print("Error: GEMINI_API_KEY environment variable is not set.")
        print("Please export it by running: export GEMINI_API_KEY='your_key'")
        sys.exit(1)
        
    client = genai.Client()
    contents = [
        types.Content(
            role="user",
            parts=[types.Part.from_text(text=f"{preamble}\n\n{text}")],
        ),
    ]
    
    config = types.GenerateContentConfig(
        temperature=1,
        response_modalities=["audio"],
        speech_config=types.SpeechConfig(
            multi_speaker_voice_config=types.MultiSpeakerVoiceConfig(
                speaker_voice_configs=[
                    types.SpeakerVoiceConfig(
                        speaker=spk1_name,
                        voice_config=types.VoiceConfig(
                            prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=spk1_voice)
                        )
                    ),
                    types.SpeakerVoiceConfig(
                        speaker=spk2_name,
                        voice_config=types.VoiceConfig(
                            prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=spk2_voice)
                        )
                    ),
                ]
            ),
        ),
    )

    print(f"Generating audio via Google AI Studio API directly to {out_file}...")
    file_index = 0
    for chunk in client.models.generate_content_stream(model=model, contents=contents, config=config):
        if chunk.parts is None: continue
        if chunk.parts[0].inline_data and chunk.parts[0].inline_data.data:
            inline_data = chunk.parts[0].inline_data
            data_buffer = inline_data.data
            ext = mimetypes.guess_extension(inline_data.mime_type)
            if ext is None:
                ext = ".wav"
                data_buffer = convert_to_wav(inline_data.data, inline_data.mime_type)
            
            # API streams can chunk very long generations into parts
            if file_index == 0:
                save_binary_file(out_file, data_buffer)
            else:
                save_binary_file(out_file.replace(".wav", f"_{file_index}.wav"), data_buffer)
            file_index += 1
        elif chunk.text:
            print(chunk.text)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 generate_audio.py <slide_number> [model] [spk1_name] [spk1_voice] [spk2_name] [spk2_voice] [preamble] [voiceover_file] [output_folder]")
        print("Example: python3 generate_audio.py 1")
        sys.exit(1)
        
    model_arg = sys.argv[2] if len(sys.argv) > 2 else "gemini-2.5-flash-preview-tts"
    spk1_name = sys.argv[3] if len(sys.argv) > 3 else "Amanda"
    spk1_voice = sys.argv[4] if len(sys.argv) > 4 else "Zephyr"
    spk2_name = sys.argv[5] if len(sys.argv) > 5 else "Jack"
    spk2_voice = sys.argv[6] if len(sys.argv) > 6 else "Puck"
    preamble = sys.argv[7] if len(sys.argv) > 7 else "Read aloud in a warm, welcoming tone with Canadian accent:"
    voiceover_file = sys.argv[8] if len(sys.argv) > 8 else "voiceover.txt"
    output_folder = sys.argv[9] if len(sys.argv) > 9 else "audio"
    
    generate(sys.argv[1], model_arg, spk1_name, spk1_voice, spk2_name, spk2_voice, preamble, voiceover_file, output_folder)
