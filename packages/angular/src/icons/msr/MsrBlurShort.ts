import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-blur-short",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBlurShort {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M599.77-340Q658-340 699-380.76q41-40.76 41-99Q740-538 699.24-579q-40.76-41-99-41Q542-620 501-579.23q-41 40.76-41 99Q460-422 500.77-381q40.76 41 99 41Zm0.24 60q-73.58 0-129.79-48.5T402-450H270q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T270-510h132q4-32 18-60t37-50H190q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T190-680h410q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBlurShort;
