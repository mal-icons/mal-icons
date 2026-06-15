import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-pexels",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgPexels {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 5C12.71 5 13.39 5.15 14 5.42C15.77 6.19 17 7.95 17 10C17 12.05 15.77 13.81 14 14.58C13.39 14.85 12.71 15 12 15V19H6V5H12ZM8 7V17H10V13H12L12 13C13.64 13.03 15.07 11.69 15.04 9.95L15.04 9.57C15.01 8.1 13.79 6.95 12.33 7L12.02 7.01L12 7H8Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgPexels;
