import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-grid2-thumb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutGrid2Thumb {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 2h3v3h-3v-3zM9 5h3v-3h-3v3zM0 13h3v-3h-3v3zM9 13h3v-3h-3v3zM4 3h4v-1h-4v1zM4 5h4v-1h-4v1zM13 2v1h4v-1h-4zM13 5h4v-1h-4v1zM7 6h-3v1h3v-1zM16 6h-3v1h3v-1zM4 11h4v-1h-4v1zM4 13h4v-1h-4v1zM13 11h4v-1h-4v1zM13 13h4v-1h-4v1zM4 15h3v-1h-3v1zM13 15h3v-1h-3v1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutGrid2Thumb;
