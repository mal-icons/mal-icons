import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-ai-model-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcAiModel24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.38 8.5a3.25 3.25 0 1 1-3.16 4h-3a3.25 3.25 0 0 1-4.44 2.51L7.21 17.76a3.25 3.25 0 1 1-1.34-0.67l1.67-2.96A3.24 3.24 0 0 1 6.75 12c0-0.910.37-1.730.97-2.32L6.12 6.85A3.25 3.25 0 0 1 1.88 3.75a3.25 3.25 0 1 1 5.53 2.32l1.6 2.84A3.25 3.25 0 0 1 13.09 11h3.12a3.25 3.25 0 0 1 3.16-2.5ZM10 10.25a1.75 1.75 0 1 00 3.5A1.75 1.75 0 0 0 10 10.25ZM5.13 2a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm12.5 9.75a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Zm-14.25 8.5a1.75 1.75 0 1 0 3.50 1.75 1.75 0 0 0-3.50Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcAiModel24;
