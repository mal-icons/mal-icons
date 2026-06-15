import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-conference-call",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcConferenceCall {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["circle",{"fill":"#FFA726","cx":"12","cy":"21","r":"5"}],["path",{"fill":"#455A64","d":"M2,34.7c0,0,2.8-6.3,10-6.3s10,6.3,10,6.3V38H2V34.7z"}],["path",{"fill":"#455A64","d":"M46,34.7c0,0-2.8-6.3-10-6.3s-10,6.3-10,6.3V38h20V34.7z"}],["circle",{"fill":"#FFB74D","cx":"24","cy":"17","r":"6"}],["path",{"fill":"#607D8B","d":"M36,34.1c0,0-3.3-7.5-12-7.5s-12,7.5-12,7.5V38h24V34.1z"}],["circle",{"fill":"#FFA726","cx":"36","cy":"21","r":"5"}],["circle",{"fill":"#FFA726","cx":"12","cy":"21","r":"5"}],["circle",{"fill":"#FFA726","cx":"36","cy":"21","r":"5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcConferenceCall;
