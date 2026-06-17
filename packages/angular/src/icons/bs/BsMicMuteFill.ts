import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-mic-mute-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMicMuteFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 8c0 0.56-0.09 1.11-0.27 1.61l-0.81-0.81A4 4 0 0 0 12 8V7a0.50.5 0 0 1 1 0zm-5 4c0.82 0 1.58-0.24 2.21-0.67l0.720.72a5 5 0 0 1-2.430.92V15h3a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1 0-1h3v-2.02A5 5 0 0 1 3 8V7a0.50.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.88L5.16 2.04A3 3 0 0 1 11 3"}],["path",{"d":"M9.49 10.61 5 6.12V8a3 3 0 0 0 4.49 2.61m-7.84-9.25 12 12 0.71-0.71-12-12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMicMuteFill;
