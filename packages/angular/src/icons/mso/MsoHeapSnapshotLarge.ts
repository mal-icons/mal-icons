import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-heap-snapshot-large",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHeapSnapshotLarge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M580.5-230q20.5 0 35-15t14.5-35.5q0-20.5-14.58-35Q600.83-330 580-330q-20 0-35 14.58-15 14.58-15 35.42 0 20 15 35t35.5 15ZM378-236l246-246-42-42-246 246 42 42Zm2.5-194q20.5 0 35-15t14.5-35.5q0-20.5-14.58-35Q400.83-530 380-530q-20 0-35 14.58-15 14.58-15 35.42 0 20 15 35t35.5 15ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHeapSnapshotLarge;
