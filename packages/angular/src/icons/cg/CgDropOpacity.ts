import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-drop-opacity",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgDropOpacity {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15.95 21.96C12.59 23.59 8.42 23.02 5.64 20.23C2.12 16.71 2.12 11.01 5.64 7.5L12 1.14L18.36 7.5C19.25 8.39 19.92 9.42 20.36 10.51C21.65 13.76 20.99 17.6 18.36 20.23C17.64 20.95 16.82 21.53 15.95 21.96ZM7.05 8.91L12 3.96L16.95 8.91C18.27 10.24 18.96 11.96 19 13.7H5C5.04 11.96 5.73 10.24 7.05 8.91Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgDropOpacity;
