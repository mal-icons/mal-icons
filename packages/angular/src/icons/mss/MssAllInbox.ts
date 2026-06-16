import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-all-inbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAllInbox {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M260-260h560v-163H676q-18 40-54.5 63.5T540-336q-45 0-81-23.5T404-423H260v163Zm280-136q38 0 65.02-25.56 27.02-25.56 27.02-61.44H820v-337H260v337h188q0 35.89 27.03 61.44Q502.05-396 540-396ZM200-200v-680h680v680H200ZM80-80v-680h60v620h620v60H80Zm180-180h560-560Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAllInbox;
