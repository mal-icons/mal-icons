import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-apps-2-ai-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiApps2AiFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 7C2.5 9.49 4.51 11.5 7 11.5C9.49 11.5 11.5 9.49 11.5 7C11.5 4.51 9.49 2.5 7 2.5C4.51 2.5 2.5 4.51 2.5 7ZM2.5 17C2.5 19.49 4.51 21.5 7 21.5C9.49 21.5 11.5 19.49 11.5 17C11.5 14.51 9.49 12.5 7 12.5C4.51 12.5 2.5 14.51 2.5 17ZM12.5 17C12.5 19.49 14.51 21.5 17 21.5C19.49 21.5 21.5 19.49 21.5 17C21.5 14.51 19.49 12.5 17 12.5C14.51 12.5 12.5 14.51 12.5 17ZM17.53 11.16L17.8 10.52C18.3 9.38 19.19 8.48 20.3 7.99L21.15 7.61C21.62 7.4 21.62 6.73 21.15 6.52L20.35 6.16C19.21 5.66 18.3 4.72 17.81 3.55L17.53 2.86C17.33 2.38 16.67 2.38 16.47 2.86L16.19 3.55C15.7 4.72 14.79 5.66 13.65 6.16L12.85 6.52C12.38 6.73 12.38 7.4 12.85 7.61L13.7 7.99C14.81 8.48 15.7 9.38 16.2 10.52L16.47 11.16C16.68 11.62 17.32 11.62 17.53 11.16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiApps2AiFill;
