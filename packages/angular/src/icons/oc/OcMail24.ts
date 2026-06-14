import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-mail-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcMail24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.75 3h20.5c0.97 0 1.750.78 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.780.78 3 1.75 3ZM1.5 7.41V18.75c0 0.140.110.250.250.25h20.5a0.250.25 0 0 0 0.25-0.25V7.41l-9.52 6.43c-0.590.4-1.370.4-1.96 0Zm0-2.66v0.85l10.36 7a0.250.25 0 0 0 0.28 0l10.36-7V4.75a0.250.25 0 0 0-0.25-0.25H1.75a0.250.25 0 0 0-0.250.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcMail24;
