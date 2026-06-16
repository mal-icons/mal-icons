import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-lightbulb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtLightbulb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4a5.51 5.51 0 0 0-5.5 5.5c0 2.47 1.49 3.89 2.35 4.5h6.3c0.86-0.61 2.35-2.03 2.35-4.5C17.5 6.47 15.03 4 12 4z","opacity":".3"}],["path",{"d":"M12 22c1.1 0 2-0.9 2-2h-4c0 1.10.9 2 2 2zm-4-5h8v2H8zm4-15C7.86 2 4.5 5.36 4.5 9.5c0 3.82 2.66 5.86 3.77 6.5h7.46c1.11-0.64 3.77-2.68 3.77-6.5C19.5 5.36 16.14 2 12 2zm3.15 12h-6.3c-0.86-0.61-2.35-2.03-2.35-4.5C6.5 6.47 8.97 4 12 4s5.5 2.47 5.5 5.5c0 2.47-1.49 3.89-2.35 4.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtLightbulb;
