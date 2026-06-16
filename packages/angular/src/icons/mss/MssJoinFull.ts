import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-join-full",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssJoinFull {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M640-200q-34 0-64.5-7.5T516-229q57-50 90.5-114.5T640-480q0-72-33.5-136.5T516-731q29-14 59.5-21.5T640-760q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200Zm-160-50q-54-38-87-98t-33-132q0-72 33-132t87-98q55 38 87.5 98T600-480q0 72-32.5 132T480-250Zm-160 50q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q34 0 65 7.5t59 21.5q-57 50-90.5 114.5T320-480q0 77 33 142t90 110q-28 14-59 21t-64 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssJoinFull;
