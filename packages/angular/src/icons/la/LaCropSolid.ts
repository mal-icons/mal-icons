import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-crop-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCropSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 8 4 L 8 8 L 4 8 L 4 10 L 8 10 L 8 24 L 22 24 L 22 28 L 24 28 L 24 24 L 28 24 L 28 22 L 11.44 22 L 22 11.44 L 22 21 L 24 21 L 24 9.44 L 27.72 5.72 L 26.28 4.28 L 22.56 8 L 11 8 L 11 10 L 20.56 10 L 10 20.56 L 10 4 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCropSolid;
