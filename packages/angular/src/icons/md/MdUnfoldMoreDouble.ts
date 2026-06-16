import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-unfold-more-double",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdUnfoldMoreDouble {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 7.83 15.17 11l1.41-1.41L12 5 7.41 9.59 8.83 11 12 7.83zm0-5L15.17 6l1.41-1.41L12 0 7.41 4.59 8.83 6 12 2.83zm0 18.34L8.83 18l-1.41 1.41L12 24l4.59-4.59L15.17 18 12 21.17zm0-5L8.83 13l-1.41 1.41L12 19l4.59-4.59L15.17 13 12 16.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdUnfoldMoreDouble;
