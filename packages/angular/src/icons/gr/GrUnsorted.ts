import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-unsorted",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrUnsorted {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15.2 15.32L16.8 13.72L17.51 14.43L15.06 16.88L14.7 17.24L14.35 16.88L11.9 14.43L12.61 13.72L14.2 15.32V7.22H15.2V15.32ZM9.3 8.91V17.02H10.3V8.91L11.9 10.51L12.61 9.8L10.16 7.35L9.8 7L9.45 7.35L7 9.8L7.71 10.51L9.3 8.91Z","fill":"currentColor"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrUnsorted;
