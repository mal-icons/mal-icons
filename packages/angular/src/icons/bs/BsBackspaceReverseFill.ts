import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-backspace-reverse-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBackspaceReverseFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.520.7l4.84 5.65a1 1 0 0 1 0 1.3L10.6 14.3a2 2 0 0 1-1.520.7H2a2 2 0 0 1-2-2zm9.85 2.85a0.50.5 0 0 0-0.71-0.71L7 7.29 4.85 5.15a0.50.5 0 1 0-0.710.71L6.29 8l-2.15 2.15a0.50.5 0 0 0 0.710.71L7 8.71l2.15 2.15a0.50.5 0 0 0 0.71-0.71L7.71 8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBackspaceReverseFill;
