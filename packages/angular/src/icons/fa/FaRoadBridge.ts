import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-road-bridge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaRoadBridge {
  readonly viewBox = "0 0 640 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M352 0L608 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32zM480 200c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24zm24 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64zM480 40c-13.3 0-24 10.7-24 24l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24zM32 96l256 0 0 64-40 0 0 64 40 0 0 96c-53 0-96 43-96 96l0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64c0-53-43-96-96-96l0-96 72 0 0-64-40 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm168 64l-80 0 0 64 80 0 0-64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaRoadBridge;
