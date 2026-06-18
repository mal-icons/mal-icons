import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-compress-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCompressSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 11 4 L 11 11 L 4 11 L 4 13 L 13 13 L 13 4 L 11 4 z M 19 4 L 19 13 L 28 13 L 28 11 L 21 11 L 21 4 L 19 4 z M 4 19 L 4 21 L 11 21 L 11 28 L 13 28 L 13 19 L 4 19 z M 19 19 L 19 28 L 21 28 L 21 21 L 28 21 L 28 19 L 19 19 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCompressSolid;
