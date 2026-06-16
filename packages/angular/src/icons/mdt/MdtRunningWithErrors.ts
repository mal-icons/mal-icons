import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-running-with-errors",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtRunningWithErrors {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 10v8h-2v-8h2zm-2 10v2h2v-2h-2zm-2-2.71A7.99 7.99 0 0 1 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8v9l7.55-7.55A9.97 9.97 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.25 0 4.33-0.74 6-2v-2.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtRunningWithErrors;
