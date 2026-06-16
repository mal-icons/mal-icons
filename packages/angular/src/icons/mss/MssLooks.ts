import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-looks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLooks {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-280q0-91 34.5-171T169-591q60-60 140-94.5T480-720q91 0 171 34.5T791-591q60 60 94.5 140T920-280h-60q0-158-111-269T480-660q-158 0-269 111T100-280H40Zm120 0q0-134 93-227t227-93q134 0 227 93t93 227h-60q0-109-75.5-184.5T480-540q-109 0-184.5 75.5T220-280h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLooks;
