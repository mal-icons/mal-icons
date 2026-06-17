import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-badge-4k-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBadge4kFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.58 8.9v0.03h1.83V5.9h-0.06a47 47 0 0 0-1.77 3z"}],["path",{"d":"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm2.37 3.720.44-0.71h1.71v3.93h0.73v0.96h-0.73V11H5.41V9.89H2.5v-0.97c0.57-1.08 1.23-2.14 1.87-3.2m7.73-0.71h1.31l-2.14 2.58L13.5 11h-1.43l-1.68-2.62-0.610.7V11H8.59V5h1.19v2.69h0.06L12.1 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBadge4kFill;
