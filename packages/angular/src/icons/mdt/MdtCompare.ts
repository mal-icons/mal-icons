import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-compare",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCompare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 5h-5v7l5 6zm-9 13v-6l-5 6z","opacity":".3"}],["path",{"d":"M19 3h-5v2h5v13l-5-6v9h5c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-7-2h-2v2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h5v2h2V1zm-2 17H5l5-6v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCompare;
