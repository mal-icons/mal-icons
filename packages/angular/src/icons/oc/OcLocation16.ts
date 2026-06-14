import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-location-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcLocation16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12.6 11.6-3.53 3.54a1.5 1.5 0 0 1-2.12 0l-3.53-3.54a6.5 6.5 0 1 1 9.19-9.19 6.5 6.5 0 0 1 0 9.19Zm-1.06-8.13v0a5 5 0 1 0-7.07 7.07L8 14.07l3.54-3.53a5 5 0 0 0 0-7.07ZM8 9a2 2 0 1 10-4A2 2 0 0 1 8 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcLocation16;
