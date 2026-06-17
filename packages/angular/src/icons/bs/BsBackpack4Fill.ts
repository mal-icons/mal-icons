import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-backpack4-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBackpack4Fill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4v0.5a0.50.5 0 0 0 1 0V7h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2m1 2a1 1 0 0 0-2 0zm-4 9v2h6v-2h-1v0.5a0.50.5 0 0 1-1 0V11z"}],["path",{"d":"M14 7.6A3 3 0 0 1 12.5 8H9.41a1.5 1.5 0 0 1-2.83 0H3.5A3 3 0 0 1 2 7.6V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM4 10.5a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0.50.5v3a0.50.5 0 0 1-0.50.5h-7a0.50.5 0 0 1-0.5-0.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBackpack4Fill;
