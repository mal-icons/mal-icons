import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-chat-voice-ai-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChatVoiceAiFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.71 8.13L20.47 8.69C20.29 9.11 19.71 9.11 19.53 8.69L19.29 8.13C18.85 7.12 18.06 6.32 17.07 5.88L16.31 5.54C15.9 5.36 15.9 4.76 16.31 4.58L17.03 4.26C18.04 3.81 18.84 2.97 19.28 1.93L19.53 1.32C19.71 0.89 20.29 0.89 20.47 1.32L20.72 1.93C21.16 2.97 21.96 3.81 22.97 4.26L23.69 4.58C24.1 4.76 24.1 5.36 23.69 5.54L22.93 5.88C21.94 6.32 21.15 7.12 20.71 8.13ZM22 12C22 11.56 21.97 11.12 21.91 10.69C21.31 10.89 20.67 11 20 11C18.91 11 17.88 10.71 17 10.2V15H15V9H15.53C14.58 7.94 14 6.54 14 5C14 4.05 14.22 3.15 14.62 2.35C13.78 2.12 12.91 2 12 2C6.48 2 2 6.48 2 12C2 14.76 3.12 17.26 4.93 19.07L2 22H12C17.52 22 22 17.52 22 12ZM11 6H13V18H11V6ZM7 15V9H9V15H7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChatVoiceAiFill;
