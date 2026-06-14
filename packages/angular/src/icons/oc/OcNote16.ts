import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-note-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcNote16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 3.75C0 2.780.78 2 1.75 2h12.5c0.97 0 1.750.78 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-0.25a0.250.25 0 0 0-0.250.25v8.5c0 0.140.110.250.250.25h12.5a0.250.25 0 0 0 0.25-0.25v-8.5a0.250.25 0 0 0-0.25-0.25ZM3.5 6.25a0.750.75 0 0 1 0.75-0.75h7a0.750.75 0 0 1 0 1.5h-7a0.750.75 0 0 1-0.75-0.75Zm0.75 2.25h4a0.750.75 0 0 1 0 1.5h-4a0.750.75 0 0 1 0-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcNote16;
