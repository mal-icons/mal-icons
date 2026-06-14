import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-repo-push-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRepoPush16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a0.750.75 0 0 1 0.750.75v3.5a0.750.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.71A2.49 2.49 0 0 1 4.5 9h2.25a0.750.75 0 0 1 0 1.5H4.5a1 1 0 0 0 0 2h4.75a0.750.75 0 0 1 0 1.5H4.5A2.5 2.5 0 0 1 2 11.5Zm12.23 7.79h0l-1.22-1.22v6.18a0.750.75 0 0 1-1.5 0V9.07L10.28 10.29a0.750.75 0 0 1-1.06-1.06l2.51-2.5a0.750.75 0 0 1 1.06 0L15.29 9.23a0.750.75 0 0 1-0.02 1.040.750.75 0 0 1-1.040.02Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRepoPush16;
