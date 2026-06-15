import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-corner-double-left-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgCornerDoubleLeftUp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.78 9.25L6.37 7.84L10.61 3.59L14.85 7.84L13.44 9.25L10.61 6.42L7.78 9.25Z","fill":"currentColor"}],["path",{"d":"M13.44 13.49L14.85 12.08L10.61 7.84L6.37 12.08L7.78 13.49L9.63 11.65V16.41C9.63 18.62 11.42 20.41 13.63 20.41H17.63V18.41H13.63C12.53 18.41 11.63 17.51 11.63 16.41V11.68L13.44 13.49Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgCornerDoubleLeftUp;
