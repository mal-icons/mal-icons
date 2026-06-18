import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-vault",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVault {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0l11.96 24L24 0zm13.37 4.83h1.39v1.38h-1.39zm-2.77 5.57H9.22V8.99h1.39zm0-2.09H9.22V6.91h1.39zm0-2.09H9.22V4.82h1.39zm2.09 6.26h-1.38V11.08h1.39zm0-2.09h-1.38V8.99h1.39zm0-2.09h-1.38V6.91h1.39zm0-2.09h-1.38V4.82h1.39zm0.680.68h1.39v1.39h-1.39zm0 3.48V8.99h1.39v1.39Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVault;
