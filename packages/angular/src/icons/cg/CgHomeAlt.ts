import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-home-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgHomeAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6 22.88C4.34 22.88 3 21.54 3 19.88V9.88C3 9.84 3 9.81 3 9.78H3C3 9.2 3.23 8.65 3.64 8.24L9.88 2C11.05 0.83 12.95 0.83 14.12 2L20.36 8.24C20.77 8.65 21 9.2 21 9.78H21C21 9.81 21 9.84 21 9.88V19.88C21 21.54 19.66 22.88 18 22.88H6ZM12.71 3.41L19 9.71V19.88C19 20.43 18.55 20.88 18 20.88H15V15.88C15 14.22 13.66 12.88 12 12.88C10.34 12.88 9 14.22 9 15.88V20.88H6C5.45 20.88 5 20.43 5 19.88V9.71L11.29 3.41C11.68 3.02 12.32 3.02 12.71 3.41Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgHomeAlt;
