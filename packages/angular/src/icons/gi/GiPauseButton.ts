import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-pause-button",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPauseButton {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M120.16 45A20.16 20.16 0 0 0 100 65.16v381.68A20.16 20.16 0 0 0 120.16 467h65.68A20.16 20.16 0 0 0 206 446.84V65.16A20.16 20.16 0 0 0 185.84 45h-65.68zm206 0A20.16 20.16 0 0 0 306 65.16v381.68A20.16 20.16 0 0 0 326.16 467h65.68A20.16 20.16 0 0 0 412 446.84V65.16A20.16 20.16 0 0 0 391.84 45h-65.68z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPauseButton;
