import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-h-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiH3 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 8L22 10L19.49 12.88C21.08 13.32 22.25 14.77 22.25 16.5C22.25 18.57 20.57 20.25 18.5 20.25C16.67 20.25 15.15 18.94 14.82 17.22L16.78 16.84C16.94 17.64 17.65 18.25 18.5 18.25C19.47 18.25 20.25 17.47 20.25 16.5C20.25 15.53 19.47 14.75 18.5 14.75C18.21 14.75 17.94 14.82 17.71 14.94L16.4 13.39L19.35 10H15V8H22ZM4 4V11H11V4H13V20H11V13H4V20H2V4H4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiH3;
