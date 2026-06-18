import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-clapperboard-ai-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiClapperboardAiLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.47 8.69L20.71 8.13C21.15 7.12 21.94 6.32 22.93 5.88L23.69 5.54C24.1 5.36 24.1 4.76 23.69 4.58L22.97 4.26C21.96 3.81 21.16 2.97 20.72 1.93L20.47 1.32C20.29 0.89 19.71 0.89 19.53 1.32L19.28 1.93C18.84 2.97 18.04 3.81 17.03 4.26L16.31 4.58C15.9 4.76 15.9 5.36 16.31 5.54L17.07 5.88C18.06 6.32 18.85 7.12 19.29 8.13L19.53 8.69C19.71 9.11 20.29 9.11 20.47 8.69ZM14.31 3H14.34C14.12 3.63 14 4.3 14 5C14 5.7 14.12 6.37 14.34 7H12L14.31 3ZM20 11V19H4V6.46L6 3H2.99C2.46 3 2 3.44 2 3.99V20.01C2 20.56 2.44 21 2.99 21H21.01C21.54 21 22 20.56 22 20.01V11H20ZM8.31 3L6 7H9.69L12 3H8.31Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiClapperboardAiLine;
