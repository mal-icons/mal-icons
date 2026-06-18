import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-autocad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAutocad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.87 1.05v0.02L0 3.38v17.91l3.9-2.33h18.34V2.33c0-0.7-0.58-1.28-1.28-1.28H3.87zm7.51 4.01h3.3l2.98 9.95h-2.59l-0.57-2.19h-2.98l-0.57 2.16h-2.42l2.84-9.92zm11.860.03v14.88H4.17l-2.07 1.24v0.46c0 0.70.58 1.28 1.28 1.28H24V5.09h-0.76zM12.97 6.68l-0.99 4.32h2.05l-1.05-4.32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAutocad;
