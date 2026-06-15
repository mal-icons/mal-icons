import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-tty",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrTty {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-width":"2","d":"M7,19 L17,19 L17,19 C17.55,19 18,19.45 18,20 L18,20 L18,20 C18,20.55 17.55,21 17,21 L7,21 L7,21 C6.45,21 6,20.55 6,20 L6,20 L6,20 C6,19.45 6.45,19 7,19 Z M7,10 C7.55,10 8,9.55 8,9 C8,8.45 7.55,8 7,8 C6.45,8 6,8.45 6,9 C6,9.55 6.45,10 7,10 Z M7,5 C7.55,5 8,4.55 8,4 C8,3.45 7.55,3 7,3 C6.45,3 6,3.45 6,4 C6,4.55 6.45,5 7,5 Z M7,15 C7.55,15 8,14.55 8,14 C8,13.45 7.55,13 7,13 C6.45,13 6,13.45 6,14 C6,14.55 6.45,15 7,15 Z M12,10 C12.55,10 13,9.55 13,9 C13,8.45 12.55,8 12,8 C11.45,8 11,8.45 11,9 C11,9.55 11.45,10 12,10 Z M12,5 C12.55,5 13,4.55 13,4 C13,3.45 12.55,3 12,3 C11.45,3 11,3.45 11,4 C11,4.55 11.45,5 12,5 Z M12,15 C12.55,15 13,14.55 13,14 C13,13.45 12.55,13 12,13 C11.45,13 11,13.45 11,14 C11,14.55 11.45,15 12,15 Z M17,10 C17.55,10 18,9.55 18,9 C18,8.45 17.55,8 17,8 C16.45,8 16,8.45 16,9 C16,9.55 16.45,10 17,10 Z M17,5 C17.55,5 18,4.55 18,4 C18,3.45 17.55,3 17,3 C16.45,3 16,3.45 16,4 C16,4.55 16.45,5 17,5 Z M17,15 C17.55,15 18,14.55 18,14 C18,13.45 17.55,13 17,13 C16.45,13 16,13.45 16,14 C16,14.55 16.45,15 17,15 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrTty;
