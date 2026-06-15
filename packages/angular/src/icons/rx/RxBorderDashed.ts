import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-border-dashed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxBorderDashed {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M0 7.5C0 7.22 0.22 7 0.5 7H3C3.28 7 3.5 7.22 3.5 7.5C3.5 7.78 3.28 8 3 8H0.5C0.22 8 0 7.78 0 7.5ZM5.75 7.5C5.75 7.22 5.97 7 6.25 7H8.75C9.03 7 9.25 7.22 9.25 7.5C9.25 7.78 9.03 8 8.75 8H6.25C5.97 8 5.75 7.78 5.75 7.5ZM12 7C11.72 7 11.5 7.22 11.5 7.5C11.5 7.78 11.72 8 12 8H14.5C14.78 8 15 7.78 15 7.5C15 7.22 14.78 7 14.5 7H12Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxBorderDashed;
