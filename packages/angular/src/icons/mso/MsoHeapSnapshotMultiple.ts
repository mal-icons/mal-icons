import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-heap-snapshot-multiple",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHeapSnapshotMultiple {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M430.14-491Q447-491 458.5-502.64t11.5-28.5Q470-548 458.36-559.5t-28.5-11.5Q413-571 401.5-559.36t-11.5 28.5Q390-514 401.64-502.5t28.5 11.5ZM437-315l209-209-43-43-209 209 43 43Zm173.14 4Q627-311 638.5-322.64t11.5-28.5Q650-368 638.36-379.5t-28.5-11.5Q593-391 581.5-379.36t-11.5 28.5Q570-334 581.64-322.5t28.5 11.5ZM780-160H260q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h348l232 232v468q0 24-18 42t-42 18ZM578-662v-198H260v640h520v-442H578ZM140-40q-24 0-42-18t-18-42v-619h60v619h498v60H140Zm120-820v198-198 640-640Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHeapSnapshotMultiple;
