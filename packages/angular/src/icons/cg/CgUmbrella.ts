import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-umbrella",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgUmbrella {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 9C4 4.58 7.58 1 12 1C16.42 1 20 4.58 20 9V11H13.02V20.5C13.02 21.88 11.9 23 10.52 23C9.14 23 8.02 21.88 8.02 20.5V17.86H10.02V20.5C10.02 20.78 10.24 21 10.52 21C10.79 21 11.02 20.78 11.02 20.5V11H4V9ZM12 3C15.31 3 18 5.69 18 9H6C6 5.69 8.69 3 12 3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgUmbrella;
