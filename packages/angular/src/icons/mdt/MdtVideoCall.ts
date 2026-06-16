import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-video-call",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtVideoCall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 16h10V8H5v8zm2-5h2V9h2v2h2v2h-2v2H9v-2H7v-2z","opacity":".3"}],["path",{"d":"M17 7c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v10c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtVideoCall;
