import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-briefcase-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoBriefcaseSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M336,288H176V256H16V452a12,12,0,0,0,12,12H484a12,12,0,0,0,12-12V256H336Z"}],["path",{"d":"M496,124a12,12,0,0,0-12-12H384V56a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8v56H28a12,12,0,0,0-12,12V224H496ZM344,112H168V88H344Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoBriefcaseSharp;
