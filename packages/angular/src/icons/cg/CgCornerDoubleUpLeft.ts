import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-corner-double-up-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgCornerDoubleUpLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.25 7.78L7.84 6.37L3.59 10.61L7.84 14.85L9.25 13.44L6.42 10.61L9.25 7.78Z","fill":"currentColor"}],["path",{"d":"M13.49 13.44L12.08 14.85L7.84 10.61L12.08 6.37L13.49 7.78L11.65 9.63L16.41 9.63C18.62 9.63 20.41 11.42 20.41 13.63L20.41 17.63L18.41 17.63L18.41 13.63C18.41 12.53 17.51 11.63 16.41 11.63L11.68 11.63L13.49 13.44Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgCornerDoubleUpLeft;
