import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-voice-ai-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiVoiceAiFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.71 7.13L20.47 7.69C20.29 8.11 19.71 8.11 19.53 7.69L19.29 7.13C18.85 6.12 18.06 5.32 17.07 4.88L16.31 4.54C15.9 4.36 15.9 3.76 16.31 3.58L17.03 3.26C18.04 2.81 18.84 1.97 19.28 0.93L19.53 0.32C19.71 -0.11 20.29 -0.11 20.47 0.32L20.72 0.93C21.16 1.97 21.96 2.81 22.97 3.26L23.69 3.58C24.1 3.76 24.1 4.36 23.69 4.54L22.93 4.88C21.94 5.32 21.15 6.12 20.71 7.13ZM8.5 6H6.5V18H8.5V6ZM4 10H2V14H4V10ZM13 2H11V22H13V2ZM17.5 8H15.5V18H17.5V8ZM22 10H20V14H22V10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiVoiceAiFill;
