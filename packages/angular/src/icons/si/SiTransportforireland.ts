import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-transportforireland",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTransportforireland {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v12c0 6.62 5.38 12 12 12h12V11.98h-0.02c0-6.62-5.38-11.98-12-11.98zm3.38 8.15h6.34v1.55h-2.33v6.12H5.71v-6.12h-2.33zm8.01 0h5.84V9.67h-4.14v1.63h3.66v1.55h-3.66v2.96H11.39zm7.54 0h1.68v7.67h-1.68Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTransportforireland;
