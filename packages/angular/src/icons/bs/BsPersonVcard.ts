import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-person-vcard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPersonVcard {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a0.50.5 0 0 1 0.5-0.5h4a0.50.5 0 0 1 0 1h-4a0.50.5 0 0 1-0.5-0.5M9 8a0.50.5 0 0 1 0.5-0.5h4a0.50.5 0 0 1 0 1h-4A0.50.5 0 0 1 9 8m1 2.5a0.50.5 0 0 1 0.5-0.5h3a0.50.5 0 0 1 0 1h-3a0.50.5 0 0 1-0.5-0.5"}],["path",{"d":"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q0.04-0.240.04-0.5C9 10.57 7.21 9 5 9c-2.09 0-3.8 1.4-3.98 3.18A1 1 0 0 1 1 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPersonVcard;
