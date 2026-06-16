import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-brightness-empty",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBrightnessEmpty {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M460-49 346.43-160H190q-12.75 0-21.37-8.62T160-190v-155.85L47-459q-9-9-9-21t9-21l113-113.15V-770q0-12.75 8.63-21.37T190-800h156.43L460-913q9-9 21-9t21 9l112 113h156q12.75 0 21.38 8.63T800-770v155.85L913-501q9 9 9 21t-9 21L800-345.85V-190q0 12.75-8.62 21.38T770-160H614L502-50q-9 8-21 8.5T460-49Zm21-432Zm0 368 107.92-107H740v-151l109-109-109-109v-151H589L481-849 371-740H220v151L111-480l109 109v151h150l111 107Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBrightnessEmpty;
