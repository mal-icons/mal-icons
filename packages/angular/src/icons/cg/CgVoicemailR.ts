import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-voicemail-r",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgVoicemailR {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.5 12C11.5 12.35 11.44 12.69 11.33 13H13.67C13.56 12.69 13.5 12.35 13.5 12C13.5 10.34 14.84 9 16.5 9C18.16 9 19.5 10.34 19.5 12C19.5 13.66 18.16 15 16.5 15H8.5C6.84 15 5.5 13.66 5.5 12C5.5 10.34 6.84 9 8.5 9C10.16 9 11.5 10.34 11.5 12ZM9.5 12C9.5 12.55 9.05 13 8.5 13C7.95 13 7.5 12.55 7.5 12C7.5 11.45 7.95 11 8.5 11C9.05 11 9.5 11.45 9.5 12ZM17.5 12C17.5 12.55 17.05 13 16.5 13C15.95 13 15.5 12.55 15.5 12C15.5 11.45 15.95 11 16.5 11C17.05 11 17.5 11.45 17.5 12Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.5 8C1.5 6.34 2.84 5 4.5 5H19.5C21.16 5 22.5 6.34 22.5 8V16C22.5 17.66 21.16 19 19.5 19H4.5C2.84 19 1.5 17.66 1.5 16V8ZM4.5 7H19.5C20.05 7 20.5 7.45 20.5 8V16C20.5 16.55 20.05 17 19.5 17H4.5C3.95 17 3.5 16.55 3.5 16V8C3.5 7.45 3.95 7 4.5 7Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgVoicemailR;
