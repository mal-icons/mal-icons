import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-heap-snapshot-thumbnail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHeapSnapshotThumbnail {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-200v-560h560v560H40Zm640-320v-240h240v240H680Zm60-60h120v-120H740v120ZM100-260h440v-440H100v440Zm580 60v-240h240v240H680Zm60-60h120v-120H740v120Zm-640 0v-440 440Zm640-320v-120 120Zm0 320v-120 120Zm-319.5-70q20.5 0 35-15t14.5-35.5q0-20.5-14.58-35Q440.83-430 420-430q-20 0-35 14.58-15 14.58-15 35.42 0 20 15 35t35.5 15ZM218-336l246-246-42-42-246 246 42 42Zm2.5-194q20.5 0 35-15t14.5-35.5q0-20.5-14.58-35Q240.83-630 220-630q-20 0-35 14.58-15 14.58-15 35.42 0 20 15 35t35.5 15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHeapSnapshotThumbnail;
