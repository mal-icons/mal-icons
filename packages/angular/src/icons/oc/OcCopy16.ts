import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-copy-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCopy16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 6.75C0 5.780.78 5 1.75 5h1.5a0.750.75 0 0 1 0 1.5h-1.5a0.250.25 0 0 0-0.250.25v7.5c0 0.140.110.250.250.25h7.5a0.250.25 0 0 0 0.25-0.25v-1.5a0.750.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"}],["path",{"d":"M5 1.75C5 0.78 5.78 0 6.75 0h7.5C15.22 0 16 0.78 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-0.25a0.250.25 0 0 0-0.250.25v7.5c0 0.140.110.250.250.25h7.5a0.250.25 0 0 0 0.25-0.25v-7.5a0.250.25 0 0 0-0.25-0.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCopy16;
