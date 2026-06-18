import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-capsule-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCapsuleFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.78 4.22C22.12 6.56 22.12 10.36 19.78 12.71L17.66 14.83L12.71 19.78C10.36 22.12 6.57 22.12 4.22 19.78C1.88 17.43 1.88 13.64 4.22 11.29L11.29 4.22C13.64 1.88 17.44 1.88 19.78 4.22ZM14.83 14.83L9.17 9.17L5.64 12.71C4.07 14.27 4.07 16.8 5.64 18.36C7.2 19.93 9.73 19.93 11.29 18.36L14.83 14.83Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCapsuleFill;
