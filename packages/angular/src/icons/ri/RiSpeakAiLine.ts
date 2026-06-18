import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-speak-ai-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSpeakAiLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.71 7.13L20.47 7.69C20.29 8.11 19.71 8.11 19.53 7.69L19.29 7.13C18.85 6.12 18.06 5.32 17.07 4.88L16.31 4.54C15.9 4.36 15.9 3.76 16.31 3.58L17.03 3.26C18.04 2.81 18.84 1.97 19.28 0.93L19.53 0.32C19.71 -0.11 20.29 -0.11 20.47 0.32L20.72 0.93C21.16 1.97 21.96 2.81 22.97 3.26L23.69 3.58C24.1 3.76 24.1 4.36 23.69 4.54L22.93 4.88C21.94 5.32 21.15 6.12 20.71 7.13ZM9 2C13.07 2 16.43 5.04 16.93 8.96L19.18 12.5C19.33 12.74 19.3 13.08 18.96 13.23L17 14.07V17C17 18.1 16.1 19 15 19H13L13 22H4L4 18.31C4 17.13 3.56 16.01 2.76 15C1.66 13.63 1 11.89 1 10C1 5.58 4.58 2 9 2ZM9 4C5.69 4 3 6.69 3 10C3 11.38 3.47 12.69 4.32 13.75C5.41 15.11 6 16.67 6 18.31L6 20H11L11 17H15V12.75L16.55 12.09L15.01 9.66L14.95 9.22C14.57 6.25 12.02 4 9 4ZM19.49 16.99L21.15 18.1C22.32 16.36 23 14.26 23 12C23 11.32 22.94 10.65 22.82 10L20.88 10.5C20.96 10.99 21 11.49 21 12C21 13.85 20.44 15.56 19.49 16.99Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSpeakAiLine;
