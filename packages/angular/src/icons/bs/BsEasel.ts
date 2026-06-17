import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-easel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEasel {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 0a0.50.5 0 0 1 0.470.34L9.05 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.32 3.84a0.50.5 0 1 1-0.950.33L11.09 11H8.5v3a0.50.5 0 0 1-1 0v-3H4.91l-1.43 4.16a0.50.5 0 1 1-0.95-0.33L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.95L7.530.34A0.50.5 0 0 1 8 0M2 3v7h12V3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEasel;
