import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-compress-arrows-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCompressArrowsAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4.72 3.28 L 3.28 4.72 L 10.56 12 L 5 12 L 5 14 L 14 14 L 14 5 L 12 5 L 12 10.56 Z M 27.28 3.28 L 20 10.56 L 20 5 L 18 5 L 18 14 L 27 14 L 27 12 L 21.44 12 L 28.72 4.72 Z M 5 18 L 5 20 L 10.56 20 L 3.28 27.28 L 4.72 28.72 L 12 21.44 L 12 27 L 14 27 L 14 18 Z M 18 18 L 18 27 L 20 27 L 20 21.44 L 27.28 28.72 L 28.72 27.28 L 21.44 20 L 27 20 L 27 18 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCompressArrowsAltSolid;
